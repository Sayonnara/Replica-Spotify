document.addEventListener('DOMContentLoaded', () => {




    const artistsData = [
        { name: 'Henrique & Julianao', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Matues', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' },

    ];

    const albumsData = [
        { name: 'white Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
        { name: 'O céu Explica (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luisa Sonza', image: './img/album-escandalo.jpg' }
    ];


    const artistGrid = document.querySelector('.artists-grid')
    const albumstGrid = document.querySelector('.albums-grid')


    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src ="${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name} <h3>
                <p>Artista<p>
            </div>
        `
        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src ="${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}<h3>
                <p>${album.artist}<p>
            </div>
        `
        albumstGrid.appendChild(albumCard)
    })

})


