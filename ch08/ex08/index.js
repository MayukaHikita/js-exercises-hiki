export function counterGroup() {
    const counters = [];

    return {
        newCounter: function() {
            let n = 0;
            const counter = {
                count: function() {
                    return n++;
                },
                reset: function() {
                    n = 0;
                },
                getValue: function() {
                    return n;
                }
            };
            counters.push(counter);
            return counter;
        },

        total: function() {
            return counters.reduce((sum, c) => sum + c.getValue(), 0);
        },

        average: function() {
            if (counters.length === 0) {
                throw new TypeError("カウンターが1つも存在しません");
            }
            return this.total() / counters.length;
        },

        variance: function() {
            if (counters.length < 2) {
                throw new TypeError("カウンターが2つ以上存在していません");
            }
            const avg = this.average();
            const squaredDiffs = counters.map(c => {
                const diff = c.getValue() - avg;
                return diff * diff;
            });
            return squaredDiffs.reduce((sum, val) => sum + val, 0) / counters.length;
            // 分散 = (各値 - 平均)² の平均
        }
    };
}
