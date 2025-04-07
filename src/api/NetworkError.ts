class NetworkError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export default NetworkError;
