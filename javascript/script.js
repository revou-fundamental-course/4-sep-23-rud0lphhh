function hitungLuasPersegi(){
    let SisiLuas, LuasPersegi;

    SisiLuas = parseInt(document.getElementById("sisi-persegi-untuk-luas").value);

    LuasPersegi = SisiLuas * SisiLuas;
    
    document.getElementById("luas-persegi").innerHTML = LuasPersegi;

}

function hitungKelilingPersegi(){
    let SisiKeliling, KelilingPersegi;

    SisiKeliling = parseInt(document.getElementById("sisi-persegi-untuk-keliling").value);

    KelilingPersegi = 4 * SisiKeliling;

    document.getElementById("keliling-persegi").innerHTML = KelilingPersegi;
}

function hitungLuasPersegiPanjang(){
    let PanjangLuas, LebarLuas, LuasPersegiPanjang;

    PanjangLuas = parseInt(document.getElementById("panjang-untuk-luas-persegi-panjang").value);
    LebarLuas = parseInt(document.getElementById("lebar-untuk-luas-persegi-panjang").value);

    LuasPersegiPanjang = PanjangLuas * LebarLuas;

    document.getElementById("luas-persegi-panjang").innerHTML = LuasPersegiPanjang;
}

function hitungKelilingPersegiPanjang(){
    let PanjangKeliling, LebarKeliling, KelilingPersegiPanjang;

    PanjangKeliling = parseInt(document.getElementById("panjang-untuk-keliling-persegi-panjang").value);
    LebarKeliling = parseInt(document.getElementById("lebar-untuk-keliling-persegi-panjang").value);

    KelilingPersegiPanjang = 2 * (PanjangKeliling + LebarKeliling);

    document.getElementById("keliling-persegi-panjang").innerHTML = KelilingPersegiPanjang;
}

function clearResultLuasPersegi(){
    document.getElementById("sisi-persegi-untuk-luas").value = ''
    document.getElementById("luas-persegi").innerHTML = ''  
}

function clearResultKelilingPersegi(){
    document.getElementById("sisi-persegi-untuk-keliling").value = ''
    document.getElementById("keliling-persegi").innerHTML = ''
}

function clearResultLuasPersegiPanjang(){
    document.getElementById("panjang-untuk-luas-persegi-panjang").value = ''
    document.getElementById("lebar-untuk-luas-persegi-panjang").value = ''
    document.getElementById("luas-persegi-panjang").innerHTML = ''
}

function clearResultKelilingPersegiPanjang(){
    document.getElementById("panjang-untuk-keliling-persegi-panjang").value = ''
    document.getElementById("lebar-untuk-keliling-persegi-panjang").value = ''
    document.getElementById("keliling-persegi-panjang").innerHTML = ''
}
  

    