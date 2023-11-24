document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById("mainContent");

    const videos = [
        {
            title: "Top 1: Barcelona 3 - 2 Real Madrid",
            descriptionAbove: "Partido jugado el 26 de abril del 2017, LaLiga temporada 16/17.",
            descriptionBelow: "Con otra brillante actuación de Lionel Messi, el Barcelona superó al Real Madrid y ganó por 3-2 el súper (y súper botín) clásico español. Un clásico impresionante. Un clásico intenso desde el primer hasta el último minuto.",
            videoId: "i2kdIbn0Uoc"
        },

        {
            title: "Top 2: Real Madrid 2 - 6 Barcelona",
            descriptionAbove: "Partido jugado el 2 de mayo del 2009, LaLiga temporada 08/09.",
            descriptionBelow: "La victoria por 2-6 del Barça en el Bernabéu al final del histórico triplete de la temporada 2008/2009 es recordada como una de las más significativas de la historia del club.",
            videoId: "ohdkCf4uFkY" 
        },

        {
            title: "Top 3: Real Madrid 0 - 4 Barcelona",
            descriptionAbove: "Partido jugado el 21 de noviembre del 2015, LaLiga temporada 15/16.",
            descriptionBelow: "El barça era tan bueno que se dio el lujo de poner a messi de suplente hasta el segundo tiempo. Excelente nivel de fútbol.",
            videoId: "FzSxDdlz7ac"
        },

        {
            title: "Top 4: Barcelona 5 - 0 Real Madrid",
            descriptionAbove: "Partido jugado el 29 de noviembre del 2010, LaLiga temporada 10/11.",
            descriptionBelow: "Los mejores de los 2 equipos ganaron juntos la copa del mundo. La mayor expresión de fútbol según muchos.",
            videoId: "5mLnuCORMrU"
        },

        {
            title: "Top 5: Barcelona 5 - 1 Real Madrid",
            descriptionAbove: "Partido jugado el 28 de octubre del 2018, LaLiga temporada 18/19.",
            descriptionBelow: "El resultado fue de un contundente 5 a 1 a favor del FC Barcelona. Para el Barça marcaron Coutinho, Arturo Vidal y un hat-trick de Luis Suárez; para el Real Madrid anotó Marcelo.",
            videoId: "dxcFXoI6grM"
        },
    ];

    videos.reverse().forEach(video => {
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("video-container");

        const videoTitle = document.createElement("h2");
        videoTitle.textContent = video.title;

        const descriptionAbove = document.createElement("p");
        descriptionAbove.textContent = video.descriptionAbove;

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${video.videoId}`;
        iframe.allowFullscreen = true;

        const descriptionBelow = document.createElement("p");
        descriptionBelow.textContent = video.descriptionBelow;

        videoContainer.appendChild(videoTitle);
        videoContainer.appendChild(descriptionAbove);
        videoContainer.appendChild(iframe);
        videoContainer.appendChild(descriptionBelow);

        mainContent.appendChild(videoContainer);
    });
});