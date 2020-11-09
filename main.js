//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

// definisco l'oggetto vue avendo gia caricato la sua cdn
var app = new Vue({
    //questo è l 'elemento dove si aggancia vue, tutto quello scritto in questo id di nome app verra gestito da vue
    el: '#app',

    //qui è dove creiamo definiamo le pseudo variabili di vue, infatti non sono delle vere variabili ma oggetti che vue definisce
    //e gestisce
    data: {
        ele_corrente : 0,
        immagini_slider : [
            'https://picsum.photos/seed/picsum/200/300',
            'https://picsum.photos/id/237/200/300',
            'https://picsum.photos/id/238/200/300',
            'https://picsum.photos/id/239/200/300'
        ],
        bianco: 'bianco',
        icone_nere: 'icone_nere',
    },

    //i methods sono dove definiamo le nostre funzioni e possono essere benissimamente scritte in es6
    methods: {

        // questa funziona al click passa al elemento successivo incrementando l elemento corrente e riportandolo a 0
        // quando è finita la lunghezza dell array
        next_img() {
            this.ele_corrente += 1;
            if(this.ele_corrente === this.immagini_slider.length) {
                this.ele_corrente = 0;
            }
        },

          // questa funziona al click passa al elemento precedente decrementado l elemento corrente e riportandolo alla lunghezza
            // dell array -1 elemento in modo da poter partire dalla fine
         prev_img() {
            this.ele_corrente -= 1;
            if(this.ele_corrente < 0) {
                this.ele_corrente = this.immagini_slider.length -1;
            }
        },

        // questa funzione va lo switch di colori su delle classi impostate, in questo caso cambia le icone ed il wrapper di vue
        dark_mode() {
            if( this.bianco === 'bianco') {
                this.bianco = 'nero';
                this.icone_nere = 'icone_bianche'

            }else {
                this.bianco = 'bianco';
                this.icone_nere = 'icone_nere'
            }
        }

        },

})


