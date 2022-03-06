import { useState } from 'react'
import Nav from '../components/Nav'

const OnBoarding = () => {

    const handleSubmit = () => {
        console.log("submitted")
    }

    const handleChange = () => {
        console.log("change")
    }

    return(
        <>
            <Nav 
                minimal={true}
                setShowModel={() => {}}
                showModal={false}
            />
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input 
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="first_name"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className="multiple_input_container">
                            <input 
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="dd"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                            <input 
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                            <input 
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple_input_container">
                            <input 
                                id="man-gender-identity"
                                type="radio"
                                name="gender-identity"
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="man-gender-identity">Man</label>
                            <input 
                                id="woman-gender-identity"
                                type="radio"
                                name="gender-identity"
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input 
                                id="more-gender-identity"
                                type="radio"
                                name="gender-identity"
                                value="more"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="more-gender-identity">More</label>

                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input 
                                id="show-gender"
                                type="checkbox"
                                name="show_gender"
                                onChange={handleChange}
                                checked={false}
                        />
                    </section>
                </form>

            </div>
        </>
    )
}
export default OnBoarding