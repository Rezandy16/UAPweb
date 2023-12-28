const data = {
    '001' : {Barang : 'Barang A', Harga : 10000},
    '002' : {Barang : 'Barang B', Harga : 20000},
    '003' : {Barang : 'Barang C', Harga : 30000}
}

function submitTransaction(){
    const KodeInput = document.getElementById('kodeInput').value;
    const quantityInput = document.getElementById('quantityInput').value;

    if(KodeInput in data && quantityInput > 0){
        const TotalHarga = data[KodeInput].Harga * quantityInput ;

        const amountPaid = prompt(`Total Pembayaran adalah: ${TotalHarga}\nMasukkan Jumlah Uang:`);

        if (amountPaid == null || isNaN(amountPaid) || amountPaid < TotalHarga) {
            alert('Pembayaran gagal.')
        }else{
            const change = amountPaid - TotalHarga;
            alert(`Kembalian ${change}`);
        }
    }else{
        alert('inputan salah');
    }
}