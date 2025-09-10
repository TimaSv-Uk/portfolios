import { useRef,useState } from "react";
import { motion } from "framer-motion";
import emailJs from "@emailjs/browser";

import { styles } from "../style";
import { SectionWrapper } from "../hoc/index";
import { slideIn } from "../utils/motion";



const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form,[name]:value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email.length  > 10 && form.name.length > 1 && form.message.length > 1){

      setLoading(true)
      emailJs.send('service_dj8jqfx','template_af4scjb',
    {
      from_name: form.name,
      to_name: "TimaSv",
      from_email: form.email,
      to_email:"sviridenkotimofei@gmail.com",
      message: form.message,
  
    },
    'Gz-g6_mOAzbYtNtE-').then(() => {
      setLoading(false);
      alert("Thanks you. I will get back to you as soon as possible.");
      setForm({
        name:"",
        email:"",
        message:"",
      })
          
    },(error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong.");
    })
    }else{
      setForm({
        name:"",
        email:"",
        message:"",
      })
      alert("Enter your email,name and message");
    }
  }

  return (
    <div className="xs:mt-12 xs:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div /* variants={slideIn("left","tween",0.2,1)} */ className="flex-[1] rounded-2xl p-8 bg-black-100">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"  >
            <label className="flex flex-col">
              <span className=" text-white font-medium mb-4">Your name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 text-white rounded-lg outline-1 placeholder:text-secondary border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className=" text-white font-medium mb-4">Your email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-tertiary py-4 px-6 text-white rounded-lg outline-1 placeholder:text-secondary border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className=" text-white font-medium mb-4">Your message</span>
              <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What's your message?" className="bg-tertiary py-4 px-6 text-white rounded-lg outline-1 placeholder:text-secondary border-none font-medium"/>
            </label>
            <button className="bg-tertiary outline-1 w-fit text-white font-bold shadow-primary py-3 px-8 rounded-xl" type="submit">{loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")
