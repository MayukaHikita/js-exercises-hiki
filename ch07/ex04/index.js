const data = [
    { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
    { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
    { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
    { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
    { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
    { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
    { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
    { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
    { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// 1. math の全員の合計点
const mathTotal = data.reduce((sum, student) => sum + student.math, 0);
// 2. クラスAの chemistry の平均点
const chemistryAverageA = data
  .filter(student => student.class === "A")
  .reduce((sum, student) => sum + student.chemistry / data.filter(s => s.class === "A").length, 0);
// 3. 3科目合計点のクラスC内での平均点
const classCTotalAverage = data
  .filter(student => student.class === "C")
  .reduce((sum, student) => sum + (student.math + student.chemistry + student.geography) / data.filter(s => s.class === "C").length, 0);
// 4. 3科目合計点が最も高い人のname
const highestTotalName = data
  .reduce((max, student) => {
    const total = student.math + student.chemistry + student.geography;
    return total > max.total ? { name: student.name, total } : max;
  }, { name: "", total: 0 }).name;
// 5. 全体の geography の標準偏差
const geographyScores = data.map(student => student.geography);
const geographyMean = geographyScores.reduce((sum, score) => sum + score, 0) / geographyScores.length;
const geographyVariance = geographyScores.reduce((sum, score) => sum + Math.pow(score - geographyMean, 2), 0) / (geographyScores.length - 1);
const geographyStdDev = Math.sqrt(geographyVariance);

console.log("1. math の全員の合計点:", mathTotal); //530
console.log("2. クラスAの chemistry の平均点:", chemistryAverageA); //45
console.log("3. 3科目合計点のクラスC内での平均点:", classCTotalAverage); //176.66666666666669
console.log("4. 3科目合計点が最も高い人のname:", highestTotalName); //Frank
console.log("5. 全体の geography の標準偏差:", geographyStdDev); //23.687784005919827