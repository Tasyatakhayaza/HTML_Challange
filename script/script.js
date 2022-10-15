let Nilai = prompt("masukkan Nilai : ")
if (Nilai >= 1 && Nilai<=30){
    console.log("D");
}
else if(Nilai >= 31 && Nilai<=59){
    console.log("C")
}
else if(Nilai >= 60 && Nilai<=79){
    console.log("B")
}
else if(Nilai >= 80 && Nilai<=100){
    console.log("A")
}
else{
    console.log("invalid Number")
}