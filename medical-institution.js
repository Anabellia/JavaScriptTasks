const {
    Console
} = require("console");
const fs = require("fs");

const myLogger = new Console({
    stdout: fs.createWriteStream("actions.txt")
});

class MedicalInstitution {

    set setAppointmentScheduled(scheduled) {
        this.scheduled = scheduled;
    }

    get getAppointmentScheduled() {
        return this.scheduled
    }

}

class Doctor {
    medInst = new MedicalInstitution();

    constructor(firstName, lastname, specialty) {
        this.firstName = firstName,
        this.lastname = lastname,
        this.specialty = specialty,
        this.patients = [],
        this.appointments = [];
    }

    takePatients(patient) {
        return this.patients.push(patient);
    }


    set setAppointment(appointment) {
        this.medInst.setAppointmentScheduled = true;
        return this.appointments.push(appointment);
    }

    get getAppointment() {
        return this.appointments;
    }
}

class Patient {
    constructor (name, lastname, id, healthCardNumber) {
        this.name = name,
        this.lastname = lastname,
        this.id = id,
        this.healthCardNumber = healthCardNumber,
        this.appointmentResult = {}
    }

    chooseDoctor(doc) {
        return this.doc = doc
    }

    set setAppointmentTaken(appointmentResult) {
        this.appointmentResult = appointmentResult
    }

    get getAppointmentTaken() {
        return this.appointmentResult;
    }  
    
}

function doctorCreate(doctor) {
    let currentDate = new Date();
    let docCreate = `[${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}] created doctor "${doctor.firstName}";`;
    myLogger.log(docCreate);
}

function patientCreate(patient) {
    let currentDate = new Date();
    let patientCreate = `[${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}] created patient "${patient.name}";`;
    myLogger.log(patientCreate);
}

function patientChoosesDoctor(patient, doctor) {
    let currentDate = new Date();
    let doctorChosen = `[${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}] patient "${patient.name}" chooses "${doctor.firstName}" for his doctor;`;
    myLogger.log(doctorChosen);
}


let doctor1 = new Doctor("Milan","Milanov","Lekar opste prakse");
doctorCreate(doctor1);

let patient1 = new Patient("Dragan","Draganov","0605998347362","52");
patientCreate(patient1);

patient1.chooseDoctor(doctor1.firstName);
patientChoosesDoctor(patient1, doctor1);

doctor1.takePatients(patient1);

doctor1.setAppointment = {
    name: patient1.name,
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
};


if(doctor1.getAppointment.length !== 0) {
    for(let i = 0; i < doctor1.getAppointment.length; i++) {
        if(doctor1.getAppointment[i].name === patient1.name) {
            patient1.setAppointmentTaken = {
                upperValue: 6,
                lowerValue: 7,
                pulse: 60,
                date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
            }

            let results = `[${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}] results for blood pressure appointment: patient "${patient1.name}" - upper Value: ${patient1.getAppointmentTaken.upperValue}, lower Value: ${patient1.getAppointmentTaken.lowerValue}, pulse: ${patient1.getAppointmentTaken.pulse};`;
            myLogger.log(results)

        }
    }

}


