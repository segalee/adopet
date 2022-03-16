export const AdoptForm = ({ name }) => {
    return (<section className="adopt-form-container">


        <form id="contact" action="" method="post">
            <h3>Interested in adopting {name}?</h3>
            <h4>Fill out this form!</h4>

            <input placeholder="Your name" type="text" required autoFocus></input>

            <input placeholder="Your Email Address" type="email" required></input>

            <input placeholder="Your Phone Number" type="tel" required></input>

            <textarea placeholder="Add some information about yourself" required></textarea>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </form>


    </section>)
} 