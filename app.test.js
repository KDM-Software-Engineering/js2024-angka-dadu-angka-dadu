const main = require('./app')

describe('Angka Dadu Raka', () => { 
  it('Menampilkan dadu Ganjil dan Genap', () => {
    main()
    const consoleSpy = jest.spyOn(console, 'log')

    expect(consoleSpy).toHaveBeenCalledWith('Raka mendapatkan angka ganjil sebanyak 3 kali dan angka genap sebanyak 3 kali')
  })
 })