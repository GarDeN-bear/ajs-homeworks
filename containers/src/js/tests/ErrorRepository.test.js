import ErrorRepository from '../ErrorRepository';


describe('ErrorRepository', () => {
  let errorRepository;
  let errors = [
    {code: 1, description: 'first error'},
    {code: 2, description: 'second error'},
    {code: 3, description: 'third error'}
  ];

  beforeEach(() => {
    errorRepository = new ErrorRepository();
  });

  test('Add error', () => {
    errors.forEach((error) => {
      errorRepository.addError(error.code, error.description);
    });
    errors.forEach((error) => {
      expect(errorRepository.errors.get(error.code)).toBe(error.description);
    });
  });

  test('Translate', () => {
    errors.forEach((error) => {
      errorRepository.addError(error.code, error.description);
    });
    errors.forEach((error) => {
      expect(errorRepository.translate(error.code)).toEqual(error.description);
    });
    expect(() => {errorRepository.translate(4)}).toThrow('Unknown error');
  });
});