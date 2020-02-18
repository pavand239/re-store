export default class BookstoreService {
    data = [
            {
                id:1,
                image: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._AC_US218_.jpg' ,
                title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
                author:'Robert C. Martin',
                price: 31
            },
            {
                id:2,
                image: 'https://images-na.ssl-images-amazon.com/images/I/41T53nRtyoL._AC_US218_.jpg',
                title: 'Web Design with HTML, CSS, JavaScript and jQuery Set',
                author:'Jon Duckett',
                price: 47
            },
        ]
    getBooks(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something went wrong!'));
                } else {
                    resolve(this.data);
                }
            },500)
        })
    }
}