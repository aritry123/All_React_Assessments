export const userHook=()=>{
    const text = 'Samsung S22\nHP Laptop\nIphone 13';
    const newText = text.split('\n').map(str => <p>{str}</p>);
    return {
        fname: 'Aritry Samaddar',
        email: 'aritry@gmail.com',
        phone: '123456',
        delAddress: 'Asansol',
        wishList: newText,
        purchasedItems: 'Samsung S22 Ultra'
    }
}