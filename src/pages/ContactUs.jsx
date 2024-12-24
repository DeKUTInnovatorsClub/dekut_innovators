export default function ContactUs(){

    function handleSubmit(event){
        event.preventDefault()
        alert("Message sent.")

    }
    return (
        <div className="contact-us">
            <div className='map'>
                <div>
                    <p>Dedan Kimathi University of Technology</p>
                    <p>Resource Center - Physics Lab</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-elements">
                    <div className='labels'>
                        <label htmlFor="fullname">Name</label>
                        <label htmlFor="email">Email</label>
                        <label htmlFor="subject">Subject</label>
                        <label htmlFor="message">Message</label>
                    </div>
                    <div className='inputs'>
                        <input type="text" id='fullname' name="fullName" />
                        <input type="email" id='email' name="email" />
                        <input type="text" id='subject' name="subject" />
                        <textarea type="text" id='message' name="message" />
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    
    )
}