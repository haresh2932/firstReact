import React, { Component } from 'react';
import Card from '../../components/card/Card';


const doctorsData = [
    {
        "doctor_id": "A",
        "doctor_name": "Dr Mona. M. Abaza",
        "time": "Monday 11:00 AM",
        "fee": "150$",
        "degr": "M.D.",
        "spec": "Dr. Abaza is a specialised doctor in ENT Otolaryngology, Adenoidectomy, Esophagoscopy, Nasal airway surgery, and Tracheostomy. She is a world-famous ENT Doctor and treats problems of the ear, head, nose, throat, and neck. Dr Abaza graduated from the Medical College of Pennsylvania in 1991. "
    },
    {
        "doctor_id": "B",
        "doctor_name": "Dr Sudhansu Bhattacharyya",
        "time": "Tuesday 11:00 AM",
        "fee": "200$",
        "degr": "MBBS,MS,MCH",
        "spec": " Dr Sudhansu is one of the best Indian Cardiovascular Surgeons and has 36 plus years of experience. He obtained MBBS and M.S. in General Surgery from Ahmedabad. "
    },
    {
        "doctor_id": "C",
        "doctor_name": "Dr Mark. F. Aaron",
        "time": "Wednesday 10:00 AM",
        "fee": "100$",
        "degr": " M.D.",
        "spec": "Dr Aaron is one of the best doctors in cardiologists. His specialisation is Cardiovascular Disease. The term Cardiology is related to the heart and its problems. He is a world-famous doctor known for curing various heart diseases. "
    },
    {
        "doctor_id": "D",
        "doctor_name": "Dr Arthur Reese Abright",
        "time": "Thursday 12:00 PM",
        "fee": "200$",
        "degr": " M.D.",
        "spec": " Dr Reese is one of the best doctors of Psychiatry. She treats problems of depression and mind-related problems. She is considered the world’s best doctor by many. Dr Reese got her accreditation from The University of Texas Southwestern Medical School. "
    },
    {
        "doctor_id": "E",
        "doctor_name": "Dr Naresh Trehan",
        "time": "Friday 1:00 PM",
        "fee": "500$",
        "degr": "Chief Cardiac Surgeon",
        "spec": "Dr Naresh is a famous Indian Cardiovascular and Cardiothoracic surgeon. He was born on August 12, 1946, in Delhi, India. He obtained a medical degree from King George’s Medical College in Lucknow. "
    },
    {
        "doctor_id": "F",
        "doctor_name": "Dr Corrie T.M Anderson",
        "time": "Saturday 10:00 AM",
        "fee": "200$",
        "degr": "M.D.",
        "spec": "Dr Anderson is also one of the best doctors in Pediatric Anesthesiology around the world. He received his A.B. with Honors in Biochemistry from Harvard University and a Doctor of Medicine (M.D) from Stanford University School of Medicine in 1982. He can be truly crowned as the ‘world’s best doctor’.  "
    },
    {
        "doctor_id": "G",
        "doctor_name": "Dr Khalid Abbed",
        "time": "Monday 1:00 PM",
        "fee": "100$",
        "degr": "M.D.",
        "spec": "Dr Khalid is a famous doctor of Neurosurgery. He is an Associate Professor and Chief of the Spine Section in the Department of Neurosurgery and has been in practice for 11-20 years. His area of clinical interest is in the treatment of spinal disorders."
    },
    {
        "doctor_id": "H",
        "doctor_name": "Dr Fouad. M. Abbas",
        "time": "Tuesday 2:00 PM",
        "fee": "200$",
        "degr": "M.D.",
        "spec": "Dr Abbas is a well-known Gynecologist/Oncologist. His specialisation field is Oncologist of Obstetrician and Gynecology. He is also considered to be one of the best doctors of Oncology in the world. The term Oncology is the study of cancer. "
    },
    {
        "doctor_id": "I",
        "doctor_name": "Dr William A. Abdu",
        "time": "Wednesday 12:00 PM",
        "fee": "250$",
        "degr": "M.D, M.S.",
        "spec": "Dr Abdu is an Associate Professor of Orthopedics and The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center. Dr Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions."
    },
]



class Doctors extends Component {
    render() {
        return (
            <div>
                {console.log(doctorsData)}
                {
                    doctorsData.map((v) => (
                      <Card data={v}/>

                    ))
                }



            </div>
        );
    }
}

export default Doctors;

// export default Doctors;