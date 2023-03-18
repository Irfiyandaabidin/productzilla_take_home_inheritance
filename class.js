// Soal 1
// - Buatlah sebuah class dengan nama Shape, dengan property numSides untuk menyimpan jumlah sisi, dan sideLengths untuk menyimpan panjang sisi. Class ini akan memiliki method getNumSides() untuk mengambil jumlah sisi, getSideLengths() untuk mengambil data panjang sisinya, dan getPerimeter() untuk mengambil luasnya.
// - Buatlah class Triangle, Rectangle dan Circle yang semuanya adalah class turunan dari class Shape dan dari masing - masing class ada method getArea() untuk mengambil luasnya.


class Shape {
    constructor(numSides = 0, sideLengths = []){
        if(typeof(numSides) != 'number'){
            return console.log("Mohon masukkan numSides dengan number")
        }
        if (!Array.isArray(sideLengths)){
            return console.log("mohon masukkan sideLengths dengan bentuk array")
        }

        this.numSides = numSides;
        this.sideLengths = sideLengths;
    }

    setNumSides(value){
        this.numSides = value
    }

    setSideLengths(value){
        this.sideLengths = value
    }

    getNumSides(){
        return this.numSides
    }

    getSideLengths(){
        return this.sideLengths
    }

    getPerimeter(){
        let perimeter = 0
        for(let i=0; i < this.numSides; i++){
            perimeter += this.sideLengths[i];
        }
        return perimeter;
    }  
}

class Triangle extends Shape {
    constructor(numSides, sideLengths, tinggi){
        super(numSides, sideLengths);
        this.tinggi = tinggi
        if(numSides > 3){
            return console.log("Bukan Triangle")
        }
    }
    setTinggi = (tinggi) =>{
        this.tinggi = tinggi
    }

    getTinggi = () => {
        return this.tinggi;
    }

    getArea(){
        return 0.5 * this.sideLengths[0] * this.tinggi 
    }
}

class Circle extends Shape {
    constructor(numSides,sideLengths, diameter){
        super(numSides, sideLengths);
        this.diameter = diameter;
        if(numSides > 1){
            return console.log("Bukan circle")
        }
    }

    setDiameter = (diameter) => {
        this.diameter = diameter;
    }

    getDiameter = () => {
        return this.diameter;
    }

    getArea = () => {
        const phi = 3.14;
        return phi * this.diameter
    }
}

class Rectangle extends Shape {
    constructor(numSides, sideLengths){
        super(numSides, sideLengths);
        if(numSides != 4){
            return console.log('Bukan rectangle')
        }
    }

    getArea(){
        return this.sideLengths[0] * this.sideLengths[1]; 
    }
}

const triangle1 = new Triangle(3, [3,4,3], 4);
let luasTriangle1 = triangle1.getArea()
let kelilingTriangle1 = triangle1.getPerimeter()
console.log(luasTriangle1)
console.log(kelilingTriangle1)

const rectangle1 = new Rectangle(4, [3,4,3,4]);
let luasRectangle1 = rectangle1.getArea()
let kelilingRectangle1 = rectangle1.getPerimeter()
console.log(luasRectangle1)
console.log(kelilingRectangle1)

const circle1 = new Circle(1, [64], 8);
let luasCircle1 = circle1.getArea()
let kelilingCircle1 = circle1.getPerimeter()
console.log(luasCircle1)
console.log(kelilingCircle1)


// Soal 2
// - Buatlah sebuah class untuk menyimpan data seseorang dan minimal dapat menyimpan nama, NIK dan jenis kelamin. Terdapat incapsulation pada class ini, jadi property yang harus di set dan diambil melalui methods. Kemudian buat 2 class turunan seperti berikut:
// 1. class Employee yang akan menyimpan data pekerjaan dan salary.
// 2. class Student yang akan menyimpan data kampus serta jurusan dimana dia belajar.

// Lengkapi dengan method untuk mengambil data data tersebut!

class Biodata {
    constructor(nama, NIK, jenisKelamin){
        this.nama = nama
        this.NIK = NIK
        this.jenisKelamin = jenisKelamin
    }

    getNama(){
        return this.nama
    }

    setNama(nama){
        this.nama = nama
    }
    
    getNIK(){
        return this.NIK
    }

    setNIK(NIK){
        this.NIK = NIK
    }

    getJenisKelamin(){
        return this.jenisKelamin
    }

    setJenisKelamin(jenisKelamin){
        this.jenisKelamin = jenisKelamin
    }
}

class Employee extends Biodata {
    constructor(nama, NIK, jenisKelamin, pekerjaan, salary){
        super(nama, NIK, jenisKelamin);
        this.pekerjaan = pekerjaan;
        this.salary = salary;
    }

    getPekerjaan() {
        return this.pekerjaan
    }

    setPekerjaan(value) {
        this.pekerjaan = value;
    }

    getSalary() {
        return this.salary
    }

    setSalary(value) {
        this.salary = value;
    }
}

class Student extends Biodata {
    constructor(nama, NIK, jenisKelamin, namaKampus, jurusan){
        super(nama, NIK, jenisKelamin);
        this.namaKampus = namaKampus;
        this.jurusan = jurusan;
    }

    getNamaKampus() {
        return this.namaKampus
    }

    setNamaKampus(value) {
        this.namaKampus = value;
    }

    getJurusan() {
        return this.jurusan
    }

    setJurusan(value) {
        this.jurusan = value;
    }
}

const irfi = new Biodata('irfi', 123456789, 'Laki laki')
console.log(irfi)

const yanda = new Employee('yanda', 123456789, 'Laki laki', 'Junior Web Dev', 3500000)
console.log(yanda)

const abidin = new Student('abidin', 123456789, 'Laki laki', 'Amikom', 'Teknik Informatika')
console.log(abidin)