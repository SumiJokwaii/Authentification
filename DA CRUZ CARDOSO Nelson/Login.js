var cpt = 0;

var LogMdp = [
    {
        username : "Balkany",
        password : "FRAUDE"
    },
    {
        username : "Ilyes",
        password : "Grande"
    },
    {
        username : "GoBack",
        password : "ToMonkey"
    },
    {
        username : "1m90",
        password : "90kg CRS"
    },
    {
        username : "Yorarien",
        password : "YaUQlQChose"
    }
]


function getInfo() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    for(var i = 0; i < LogMdp.length; i++)
    {
          if (username == LogMdp[i].username && password == LogMdp[i].password)
        {
            alert("Connexion r\351ussie !");
            window.location.href = "page2.html";
            return
        }
    }
    cpt++;
    alert("identification refus\351e, il vous reste " + (3-cpt) + " tentative(s).");
    document.getElementById('username').value="";
    document.getElementById('password').value="";
    if (cpt > 2) {
        alert("ERREUR, PLUS DE TENTATIVES");
        window.location.href = "page3.html";
        return
    }
}

/* /351 = é */