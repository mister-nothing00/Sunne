
// CLIENTI
var clienti = [
    {
        id: 1,
        nome: "Mario",
        cognome: "Rossi",
        email: "mario.rossi@example.com",
        metodoPagamento: "Carta di Credito",
        ordinaProdotto: function (prodotto) {
            console.log("".concat(this.nome, " ").concat(this.cognome, " ha ordinato il prodotto ").concat(prodotto.tipo, " (ID: ").concat(prodotto.id, ") utilizzando ").concat(this.metodoPagamento, "."));
            prodotto.assegnaCliente(this);
        },
    },
    {
        id: 2,
        nome: "Luisa",
        cognome: "Bianchi",
        email: "luisa.bianchi@example.com",
        metodoPagamento: "PayPal",
        ordinaProdotto: function (prodotto) {
            console.log("".concat(this.nome, " ").concat(this.cognome, " ha ordinato il prodotto ").concat(prodotto.tipo, " (ID: ").concat(prodotto.id, ") utilizzando ").concat(this.metodoPagamento, "."));
            prodotto.assegnaCliente(this);
        },
    },
    {
        id: 3,
        nome: "Giovanni",
        cognome: "Verdi",
        email: "giovanni.verdi@example.com",
        metodoPagamento: "Bonifico",
        ordinaProdotto: function (prodotto) {
            console.log("".concat(this.nome, " ").concat(this.cognome, " ha ordinato il prodotto ").concat(prodotto.tipo, " (ID: ").concat(prodotto.id, ") utilizzando ").concat(this.metodoPagamento, "."));
            prodotto.assegnaCliente(this);
        },
    },
];
// PRODOTTI
var prodotti = [
    {
        immagine: "https://soulwave-surfshop.com/wp-content/uploads/2024/05/120101_121WSP_0090-1-scr.jpg",
        tipo: "Muta da Surf",
        id: "01",
        taglia: ["S", "M", "L"],
        colore: "Nero",
        stato: "disponibile",
        categoria: "Active",
        assegnaCliente: function (cliente) {
            console.log("Prodotto ".concat(this.id, " assegnato al cliente ").concat(cliente.nome));
        },
    },
    {
        immagine: "https://soulwave-surfshop.com/wp-content/uploads/2024/05/aqbha03572_quiksilverp_xkkk_frt2.jpg",
        tipo: "Cappello pescatora",
        id: "02",
        taglia: "Taglia Unica",
        colore: "Grigio - Nero",
        stato: "disponibile",
        categoria: "Relax",
        assegnaCliente: function (cliente) {
            console.log("Prodotto ".concat(this.id, " assegnato al cliente ").concat(cliente.nome));
        },
    },
    {
        immagine: "https://soulwave-surfshop.com/wp-content/uploads/2023/02/A2512303_WHT_1.jpg.webp",
        tipo: "Costume",
        id: "03",
        taglia: ["S", "M"],
        colore: "Disegno Grafico",
        stato: "esaurito",
        categoria: "Active",
        assegnaCliente: function (cliente) {
            console.log("Prodotto ".concat(this.id, " assegnato al cliente ").concat(cliente.nome));
        },
    },
    {
        immagine: "https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwe6103a23/images/hi-res/37655_WHI.jpg?sw=1400&sh=1400&sfrm=png&q=90&bgcolor=f5f5f5",
        tipo: "Maglietta",
        id: "04",
        taglia: ["S", "M", "L", "XL"],
        colore: "Grigio + Grafica",
        stato: "disponibile",
        categoria: "Relax",
        assegnaCliente: function (cliente) {
            console.log("Prodotto ".concat(this.id, " assegnato al cliente ").concat(cliente.nome));
        },
    },
    {
        immagine: "https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw734deaa0/images/hi-res/89448_BLK.jpg?sw=1920&sh=1920&sfrm=png&q=90&bgcolor=f5f5f5",
        tipo: "Guanti Unisex",
        id: "05",
        taglia: "Taglia Unica",
        colore: "Nero",
        stato: "disponibile",
        categoria: "Extreme",
        assegnaCliente: function (cliente) {
            console.log("Prodotto ".concat(this.id, " assegnato al cliente ").concat(cliente.nome));
        },
    },
    {
        immagine: "https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw961b81f2/images/hi-res/38296_BLK.jpg?sw=1400&sh=1400&sfrm=png&q=90&bgcolor=f5f5f5",
        tipo: "Cappello Uomo",
        id: "06",
        taglia: "Taglia Unica",
        colore: "Nero",
        stato: "disponibile",
        categoria: "Relax",
        assegnaCliente: function (cliente) {
            console.log("Prodotto ".concat(this.id, " assegnato al cliente ").concat(cliente.nome));
        },
    },
];
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.prodottiInProduzione = [];
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log("Prodotto ".concat(prodotto.tipo, " aggiunto al processo di produzione: ").concat(this.nome, "."));
    };
    return ProcessoProduzione;
}());
// FUNZIONI FILTRAGGIO CATEGORIA
function filtraProdottiPerCategoria(categoria) {
    return prodotti.filter(function (prodotto) { return prodotto.categoria === categoria; });
}
function mostraProdotti(categoria) {
    var prodottiFiltrati = categoria === "Tutti" ? prodotti : filtraProdottiPerCategoria(categoria);
    var container = document.querySelector(".prodotti--container");
    if (container) {
        container.innerHTML = "";
        prodottiFiltrati.forEach(function (prodotto) {
            var prodottoHTML = "\n                <div class=\"card\">\n                    <div class=\"card-img-container\">\n                        <img src=\"".concat(prodotto.immagine, "\" class=\"card-img\" alt=\"Immagine del prodotto ").concat(prodotto.tipo, "\" />\n                        <div class=\"card-hover-content\">\n                            <h5 class=\"card-title\">").concat(prodotto.tipo, "</h5>\n                            <p class =\"card-text lh-xl fs-6\">\n                                COD: ").concat(prodotto.id, "<br/>\n                                Taglia: ").concat(Array.isArray(prodotto.taglia)
                ? prodotto.taglia.join(", ")
                : prodotto.taglia, "<br/>\n                                Colore: ").concat(prodotto.colore, "<br/>\n                                Stato: ").concat(prodotto.stato, "\n                            </p>\n                            <button class=\"btn btn-dark\" data-id=\"").concat(prodotto.id, "\">Aggiungi al carrello</button>\n                        </div>\n                    </div>\n                </div>\n            ");
            container.insertAdjacentHTML("beforeend", prodottoHTML);
        });
        var bottoniAggiungiCarrello = container.querySelectorAll(".btn-dark");
        bottoniAggiungiCarrello.forEach(function (button) {
            button.addEventListener("click", function () {
                var prodottoId = button.getAttribute("data-id");
                var prodottoDaAggiungere = prodotti.find(function (prodotto) { return prodotto.id === prodottoId; });
                if (prodottoDaAggiungere) {
                    aggiungiAlCarrello(prodottoDaAggiungere);
                }
            });
        });
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var bottoniCategoria = document.querySelectorAll("button");
    bottoniCategoria.forEach(function (button) {
        button.addEventListener("click", function () {
            var _a;
            var categoria = ((_a = button.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
            mostraProdotti(categoria);
        });
    });
});
// FUNZIONI PER AGGIUNGERE AL CARRELLO
var carrello = JSON.parse(localStorage.getItem("carrello") || "[]");
function rimuoviProdotto(id) {
    carrello.splice(id, 1);
    localStorage.setItem("carrello", JSON.stringify(carrello));
    mostraProdottiCarrello();
}
function aggiornaConteggio() {
    var conteggio = document.getElementById("conteggio-carrello");
    if (conteggio) {
        conteggio.textContent = carrello.length.toString();
    }
}
function aggiungiAlCarrello(prodotto) {
    if (prodotto.stato === "disponibile") {
        carrello.push(prodotto);
        localStorage.setItem("carrello", JSON.stringify(carrello));
        aggiornaConteggio();
        var modalHTML = "\n        <div class=\"modal fade\" tabindex=\"1\" id=\"successModal\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header bg-success w-100\">\n                        <h5 class=\"modal-title p-1\">Successo</h5>\n                        <button type=\"button\" class=\"btn-close text-light \" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                    </div>\n                    <div class=\"modal-body text-dark fw-bold\">\n                        <p>Prodotto ".concat(prodotto.tipo, " aggiunto al carrello.</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Chiudi</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
        document.body.insertAdjacentHTML("beforeend", modalHTML);
        var modalElement_1 = document.getElementById("successModal");
        if (modalElement_1) {
            var modal = new bootstrap.Modal(modalElement_1);
            modal.show();
            modalElement_1.addEventListener("hidden.bs.modal", function () {
                modalElement_1.remove();
            });
        }
        else {
            console.error("Il modale non è stato trovato nel DOM.");
        }
    }
    else {
        alert("Errore di aggiunta prodotto: ".concat(prodotto.tipo, " non \u00E8 disponibile."));
    }
}
function mostraProdottiCarrello() {
    var container = document.getElementById("carrello-container");
    if (container) {
        container.innerHTML = "";
        if (carrello.length === 0) {
            container.innerHTML = "<p>Il carrello è vuoto.</p>";
            return;
        }
        carrello.forEach(function (prodotto, id) {
            var prodottoHTML = "\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4\">\n                    <img src=\"".concat(prodotto.immagine, "\" class=\"card-img-top\" alt=\"").concat(prodotto.tipo, "\" />\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(prodotto.tipo, "</h5>\n                        <p class=\"card-text\">COD: ").concat(prodotto.id, "<br/>Colore: ").concat(prodotto.colore, "<br/>Taglia: ").concat(Array.isArray(prodotto.taglia) ? prodotto.taglia.join(", ") : prodotto.taglia, "</p>\n                    </div>\n                    <button class=\" btn btn-sm btn-outline-dark rimuovi-prodotto mb-2\" data-id=\"").concat(id, "\">Rimuovi</button>\n                </div>\n            </div>\n        ");
            container.insertAdjacentHTML("beforeend", prodottoHTML);
        });
        var bottoniRimuovi = container.querySelectorAll(".rimuovi-prodotto");
        bottoniRimuovi.forEach(function (button) {
            button.addEventListener("click", function () {
                var id = parseInt(this.getAttribute("data-id") || "0");
                rimuoviProdotto(id);
            });
        });
    }
    aggiornaConteggio();
}
document.addEventListener("DOMContentLoaded", function () {
    mostraProdottiCarrello();
    aggiornaConteggio();
});
