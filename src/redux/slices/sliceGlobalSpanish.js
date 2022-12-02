import { createSlice } from "@reduxjs/toolkit";
// ? Estado inicial que contiene dos arrays con los objetos clasificados por el tipo de objeto. Estos dos arrays se dividen en un idioma u otro.
const initialState = {
  objectsSpanish: [
    {
      type: 'artist',
      name: 'Juampi Pellecier',
      image: 'https://scontent.fmdz2-1.fna.fbcdn.net/v/t1.6435-9/51777778_549018845573111_6175380995542351872_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGdTPWz_4TF9eXmMvHGC7R3_pBhk1u9Pt7-kGGTW70-3hni7lkRyAL2Eirm4nuYHNzQcEkNXFrlOy4r0K42DXb9&_nc_ohc=A-jyx0AIE-gAX-lZCRD&_nc_ht=scontent.fmdz2-1.fna&oh=00_AfD9hGKNO21QQhR_m32uEJIp18CG-TnpT0D3kpO7L1J8Fg&oe=639E3751',
      url: 'https://www.youtube.com/watch?v=hID10XXouBk'
    },
    {
      type: 'artist',
      name: 'Cnco',
      image: 'https://akamai.sscdn.co/uploadfile/letras/fotos/a/4/6/3/a463a9ef9597e61fa71991f7926a3e37.jpg',
      url: 'https://www.youtube.com/watch?v=_ubFVRNbfs4'
    },
    {
      type: 'artist',
      name: 'Q Lokura',
      image: 'https://akamai.sscdn.co/uploadfile/letras/fotos/5/9/7/c/597ca621805e5c50e3f12eaceef11e6f.jpg',
      url: 'https://www.youtube.com/watch?v=0SsmFZNDe5c'
    },
    {
      type: 'artist',
      name: 'Alejandro Veliz',
      image: 'https://yt3.ggpht.com/ytc/AMLnZu8NlIVwmz-o7BfhqPLhznuN-cwNcr6ijsMU7Cxjow=s900-c-k-c0x00ffffff-no-rj',
      url: 'https://www.youtube.com/watch?v=-qfEwX4B7FI'
    },
    {
      type: 'artist',
      name: 'La Linea',
      image: 'https://scontent.fmdz2-1.fna.fbcdn.net/v/t31.18172-8/18193319_417674645278653_8708557896626498088_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGSV1aWElD1Qrksjmd8qwZJRITKUxGN569EhMpTEY3nr2xkpXYmN22BPj5sil4XUmtfWpr2NJHUH57CNqnzViVI&_nc_ohc=TXgYZKDY64UAX8jopEb&_nc_ht=scontent.fmdz2-1.fna&oh=00_AfCO6KD-mswpjO50kFrgGhXlpZ-LuhbE37qV2Sre8FAOfA&oe=639E53E9',
      url: 'https://www.youtube.com/watch?v=BV2afxLoUyE'
    },
    {
      type: 'artist',
      name: 'La bandimania',
      image: 'https://scontent.fmdz2-1.fna.fbcdn.net/v/t1.6435-9/66759480_2901565673203762_6642480631970267136_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHFJ4NEilupWYy-6htyFrDZ_vuCvaCrr8j--4K9oKuvyAapa6iY96rsKMBvPDZtjTkLtjdVea4O2ze0XKQZ3wPw&_nc_ohc=903qja5rhjgAX_aUt4h&_nc_ht=scontent.fmdz2-1.fna&oh=00_AfDJ8YdAs4eP43-JQ8UO-FQ22wScYo6tAPgRi-0E6wlDdQ&oe=639E3A35',
      url: 'https://www.youtube.com/watch?v=5J2UVqitd7c'
    },
    {
      type: 'artist',
      name: 'Maxi Ciares',
      image: 'https://scontent.fmdz2-2.fna.fbcdn.net/v/t1.6435-9/120062741_10222274885997614_55487296530412777_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHQB84YOErM9vPiozPZ38_ZUSK1BgLFXqZRIrUGAsVepv2YUQjfy04fhnrSEj9HMGJh0y9H_mkz2s43wpM6tU_H&_nc_ohc=19wZ18xVuJ0AX-xiM7C&_nc_ht=scontent.fmdz2-2.fna&oh=00_AfCXdnFgwFlIeb1HuLRLXbyhCHA-ZX9qvw9Q9uFv37RDXA&oe=639E4595',
      url: 'https://www.youtube.com/watch?v=JZvmY-uEpgY'
    },
    {
      type: 'service',
      name: 'Grabacion de videoclip',
      description: ''
    },
    {
      type: 'equipment',
      name: 'Sony X30Pro',
      description: ''
    },
    {
      type: 'service',
      name: 'Administracion de sonido',
      description: ''
    },
    {
      type: 'equipment',
      name: 'Sony Hxr Nx5',
      description: ''
    },
  ],
  filtered: []
};
// TODO: Dividir estado global en dos (Uno en español y otro en ingles)
export const globalSpanishSlice = createSlice({
  name: 'globalSpanish',
  initialState,
  reducers: {
    filter: (state, action) => {

    },
  },
});

export default globalSpanishSlice.reducer;