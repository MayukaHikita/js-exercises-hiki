export function withResource(resource, fn) {
  try {
    fn(resource); // 実際に行う処理
  } finally {
    resource.close(); // 最後に必ずcloseを実施
  }
}