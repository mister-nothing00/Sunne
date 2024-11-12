// INTERFACCE

interface ICliente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  ordinaProdotto(prodotto: IProdotto): void;
}

interface IProdotto {
  immagine: string;
  tipo: string;
  id: string;
  taglia: string | string[];
  colore: string;
  stato: "disponibile" | "esaurito";
  categoria: "Relax" | "Active" | "Extreme" | "Kids";
  assegnaCliente(cliente: ICliente): void;
}

// CLIENTI

const clienti: ICliente[] = [
  {
    id: 1,
    nome: "Mario",
    cognome: "Rossi",
    email: "mario.rossi@example.com",
    metodoPagamento: "Carta di Credito",
    ordinaProdotto: function (prodotto: IProdotto) {
      console.log(
        `${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.tipo} (ID: ${prodotto.id}) utilizzando ${this.metodoPagamento}.`
      );
      prodotto.assegnaCliente(this);
    },
  },
  {
    id: 2,
    nome: "Luisa",
    cognome: "Bianchi",
    email: "luisa.bianchi@example.com",
    metodoPagamento: "PayPal",
    ordinaProdotto: function (prodotto: IProdotto) {
      console.log(
        `${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.tipo} (ID: ${prodotto.id}) utilizzando ${this.metodoPagamento}.`
      );
      prodotto.assegnaCliente(this);
    },
  },
  {
    id: 3,
    nome: "Giovanni",
    cognome: "Verdi",
    email: "giovanni.verdi@example.com",
    metodoPagamento: "Bonifico",
    ordinaProdotto: function (prodotto: IProdotto) {
      console.log(
        `${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.tipo} (ID: ${prodotto.id}) utilizzando ${this.metodoPagamento}.`
      );
      prodotto.assegnaCliente(this);
    },
  },
];

// PRODOTTI

const prodotti: IProdotto[] = [
  {
    immagine:
      "https://soulwave-surfshop.com/wp-content/uploads/2024/05/120101_121WSP_0090-1-scr.jpg",
    tipo: "Muta da Surf",
    id: "01",
    taglia: ["S", "M", "L"],
    colore: "Nero",
    stato: "disponibile",
    categoria: "Active",
    assegnaCliente: function (cliente: ICliente) {
      console.log(`Prodotto ${this.id} assegnato al cliente ${cliente.nome}`);
    },
  },
  {
    immagine:
      "https://soulwave-surfshop.com/wp-content/uploads/2024/05/aqbha03572_quiksilverp_xkkk_frt2.jpg",
    tipo: "Cappello pescatora",
    id: "02",
    taglia: "Taglia Unica",
    colore: "Grigio - Nero",
    stato: "disponibile",
    categoria: "Relax",
    assegnaCliente: function (cliente: ICliente) {
      console.log(`Prodotto ${this.id} assegnato al cliente ${cliente.nome}`);
    },
  },
  {
    immagine:
      "https://soulwave-surfshop.com/wp-content/uploads /2023/02/A2512303_WHT_1.jpg.webp",
    tipo: "Costume",
    id: "03",
    taglia: ["S", "M"],
    colore: "Disegno Grafico",
    stato: "esaurito",
    categoria: "Active",
    assegnaCliente: function (cliente: ICliente) {
      console.log(`Prodotto ${this.id} assegnato al cliente ${cliente.nome}`);
    },
  },
  {
    immagine:
      "https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwe6103a23/images/hi-res/37655_WHI.jpg?sw=1400&sh=1400&sfrm=png&q=90&bgcolor=f5f5f5",
    tipo: "Maglietta",
    id: "04",
    taglia: ["S", "M", "L", "XL"],
    colore: "Grigio + Grafica",
    stato: "disponibile",
    categoria: "Relax",
    assegnaCliente: function (cliente: ICliente) {
      console.log(`Prodotto ${this.id} assegnato al cliente ${cliente.nome}`);
    },
  },
  {
    immagine:
      "https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw734deaa0/images/hi-res/89448_BLK.jpg?sw=1920&sh=1920&sfrm=png&q=90&bgcolor=f5f5f5",
    tipo: "Guanti Unisex",
    id: "05",
    taglia: "Taglia Unica",
    colore: "Nero",
    stato: "disponibile",
    categoria: "Extreme",
    assegnaCliente: function (cliente: ICliente) {
      console.log(`Prodotto ${this.id} assegnato al cliente ${cliente.nome}`);
    },
  },
  {
    immagine:
      "https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw961b81f2/images/hi-res/38296_BLK.jpg?sw=1400&sh=1400&sfrm=png&q=90&bgcolor=f5f5f5",
    tipo: "Cappello Uomo",
    id: "06",
    taglia: "Taglia Unica",
    colore: "Nero",
    stato: "disponibile",
    categoria: "Relax",
    assegnaCliente: function (cliente: ICliente) {
      console.log(`Prodotto ${this.id} assegnato al cliente ${cliente.nome}`);
    },
  },
];

// PRODUZIONE

interface IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];
  aggiungiProdotto(prodotto: IProdotto): void;
}

class ProcessoProduzione implements IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  constructor(nome: string, descrizione: string) {
    this.nome = nome;
    this.descrizione = descrizione;
    this.prodottiInProduzione = [];
  }

  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);
    console.log(
      `Prodotto ${prodotto.tipo} aggiunto al processo di produzione: ${this.nome}.`
    );
  }
}

// FUNZIONI FILTRAGGIO CATEGORIA

export function filtraProdottiPerCategoria(categoria: string): IProdotto[] {
  return prodotti.filter((prodotto) => prodotto.categoria === categoria);
}

export function mostraProdotti(categoria: string): void {
  const prodottiFiltrati =
    categoria === "Tutti" ? prodotti : filtraProdottiPerCategoria(categoria);
  const container = document.querySelector(".prodotti--container");

  if (container) {
    container.innerHTML = "";

    prodottiFiltrati.forEach((prodotto) => {
      const prodottoHTML = `
                <div class="card">
                    <div class="card-img-container">
                        <img src="${
                          prodotto.immagine
                        }" class="card-img" alt="Immagine del prodotto ${
        prodotto.tipo
      }" />
                        <div class="card-hover-content">
                            <h5 class="card-title">${prodotto.tipo}</h5>
                            <p class ="card-text lh-xl fs-6">
                                COD: ${prodotto.id}<br/>
                                Taglia: ${
                                  Array.isArray(prodotto.taglia)
                                    ? prodotto.taglia.join(", ")
                                    : prodotto.taglia
                                }<br/>
                                Colore: ${prodotto.colore}<br/>
                                Stato: ${prodotto.stato}
                            </p>
                            <button class="btn btn-dark" data-id="${
                              prodotto.id
                            }">Aggiungi al carrello</button>
                        </div>
                    </div>
                </div>
            `;

      container.insertAdjacentHTML("beforeend", prodottoHTML);
    });

    const bottoniAggiungiCarrello = container.querySelectorAll(".btn-dark");
    bottoniAggiungiCarrello.forEach((button) => {
      button.addEventListener("click", () => {
        const prodottoId = button.getAttribute("data-id");
        const prodottoDaAggiungere = prodotti.find(
          (prodotto) => prodotto.id === prodottoId
        );
        if (prodottoDaAggiungere) {
          aggiungiAlCarrello(prodottoDaAggiungere);
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bottoniCategoria = document.querySelectorAll("button");

  bottoniCategoria.forEach((button) => {
    button.addEventListener("click", () => {
      const categoria = button.textContent?.trim() || "";
      mostraProdotti(categoria);
    });
  });
});

// FUNZIONI PER AGGIUNGERE AL CARRELLO

var carrello = JSON.parse(localStorage.getItem("carrello") || "[]");

function rimuoviProdotto(id: number) {
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

declare var bootstrap: any;

function aggiungiAlCarrello(prodotto: IProdotto) {
  if (prodotto.stato === "disponibile") {
    carrello.push(prodotto);
    localStorage.setItem("carrello", JSON.stringify(carrello));
    aggiornaConteggio();

    const modalHTML = `
        <div class="modal fade" tabindex="1" id="successModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-success w-100">
                        <h5 class="modal-title p-1">Successo</h5>
                        <button type="button" class="btn-close text-light " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-dark fw-bold">
                        <p>Prodotto ${prodotto.tipo} aggiunto al carrello.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    const modalElement = document.getElementById("successModal");
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();

      modalElement.addEventListener("hidden.bs.modal", () => {
        modalElement.remove();
      });
    } else {
      console.error("Il modale non è stato trovato nel DOM.");
    }
  } else {
    alert(`Errore di aggiunta prodotto: ${prodotto.tipo} non è disponibile.`);
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
    carrello.forEach(function (prodotto: any, id: number) {
      var prodottoHTML = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${prodotto.immagine}" class="card-img-top" alt="${prodotto.tipo}" />
                    <div class="card-body">
                        <h5 class="card-title">${prodotto.tipo}</h5>
                        <p class="card-text">COD: ${prodotto.id}<br/>Colore: ${prodotto.colore}<br/>Taglia: ${Array.isArray(prodotto.taglia) ? prodotto.taglia.join(", ") : prodotto.taglia}</p>
                    </div>
                    <button class=" btn btn-sm btn-outline-dark rimuovi-prodotto mb-2" data-id="${id}">Rimuovi</button>
                </div>
            </div>
        `;
      container!.insertAdjacentHTML("beforeend", prodottoHTML);
    });

    var bottoniRimuovi = container.querySelectorAll(".rimuovi-prodotto");
    bottoniRimuovi.forEach(function (button) {
      button.addEventListener("click", function (this: HTMLButtonElement) {
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