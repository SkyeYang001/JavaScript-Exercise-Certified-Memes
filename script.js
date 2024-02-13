document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("Option-Form").addEventListener('submit', function (eventData) {
        eventData.preventDefault();
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        let presentOutput = document.getElementById('Certification-Present');
        let nameOutput = document.getElementById('Certification-Name');
        let detailOutput = document.getElementById('Certification-Details');
        let iconOutput = document.getElementById('Certification-Icon');
        let ownerOutput = document.getElementById('Certification-Owner');


        presentOutput.innerText = `${formData.option}`;
        nameOutput.innerText = formData.name;
        detailOutput.innerText = `${formData.option}`;
        iconOutput = formData.option;
        ownerOutput.innerText = `${formData.option}`;
        
        let dateOutput = document.getElementById("Certification-Date");
        let theDate = new Data().toLocaleDataString('en-us', {weekday: "long", year:"numeric", month:"short", day:"numeric"})
        dateOutput.innerText = `${theDate}`;

    });

    document.getElementById("option").addEventListener('change', function (eventData) {
        changeCert = submitCert(eventData.target.value);

    });

    document.getElementById("name").addEventListener('submit', function (eventData) {
        let nameOutput = document.getElementById('Certification-Name');
        nameOutput.innerText = eventData.target.value;

    });

    function submitCert(value) {
        let option = document.getElementById('Certification-Paper');
        option.classList = "";
        switch (value) {
            case 'A':
                option.classList.add('a');
                console.log('a');
                break;
            case 'B':
                option.classList.add('b');
                console.log('b');
                break;
            case 'C':
                option.classList.add('c');
                console.log('c');
                break;
            case 'X':
                option.classList.add('x');
                break;
        }
    }

    if (document.getElementById('Certification-Paper') !== !null) {

        let printelement = document.getElementById('Certification-Paper');

        printelement.addEventListener('click', function (e) {
            var printcontent = document.getElementById('Certification-Paper');

            var printpaper = window.open('', '', 'left=0,top=0,width=1500,height=1000,toolbar=0,scrollbars=0,status=0');
            printpaper.document.write(printcontent.innerHTML);
            printpaper.document.close();
            printpaper.focus();
            printpaper.print();
            printpaper.close();
        });
        //in html -> onclick="windowprint()"
    }

    /*if (document.getElementById("option") = document.getElementById("A")) {
        const presentOutputA = document.getElementById("Certification-Present");
        const nameOutputA = document.getElementById("Certification-Name");
        const detailsOutputA = document.getElementById("Certification-Details");
        const iconOutputA = document.getElementById("Certification-Icon");
        const ownerOutputA = document.getElementById("Certification-Owner");

        presentOutputA = "";
        nameOutputA = "";
        detailsOutputA = "";
        iconOutputA = "";
        ownerOutputA = "";
    }

     if (document.getElementById("option") = document.getElementById("B")) {
        const presentOutputB = document.getElementById("Certification-Present");
        const nameOutputB = document.getElementById("Certification-Name");
        const detailsOutputB = document.getElementById("Certification-Details");
        const iconOutputB = document.getElementById("Certification-Icon");
        const ownerOutputB = document.getElementById("Certification-Owner");

        presentOutputB = "";
        nameOutputB = "";
        detailsOutputB = "";
        iconOutputB = "";
        ownerOutputB = "";
    }

    if (document.getElementById("option") = document.getElementById("C")) {
        const presentOutputC = document.getElementById("Certification-Present");
        const nameOutputC = document.getElementById("Certification-Name");
        const detailsOutputC = document.getElementById("Certification-Details");
        const iconOutputC = document.getElementById("Certification-Icon");
        const ownerOutputC = document.getElementById("Certification-Owner");

        presentOutputC = "";
        nameOutputC = "";
        detailsOutputC = "";
        iconOutputC = "";
        ownerOutputC = "";
    } */
});