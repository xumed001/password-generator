//
//
import { sha256 } from 'js-sha256'
import { useState } from 'react';

function Main() {
    const [pass, setPass] = useState('')
    const [passLength, setPassLength] = useState(16)

    const options = [16,20,24]
    
    function fyShuffle (toShuffle = []) {
        for (let i = (toShuffle.length - 1); i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [toShuffle[i], toShuffle[randomIndex]] = [toShuffle[randomIndex], toShuffle[i]];
        }
        return toShuffle
    }

    function roll(min, max) {
        let result = Math.floor(Math.random() * (max - min) + min)
        return result
    }

    function generatePass() {
        const array = new Uint32Array(1)
        const seed = self.crypto.getRandomValues(array)
        const seedIni = seed[0].toString()
        const hashCode = sha256(seedIni)
        const hashArray = [...hashCode]
        const shuffledHash  = fyShuffle(hashArray)
        const passwordLength = passLength
        const spliceStart = roll(0, 64 - passwordLength)
        const PasswordOut = shuffledHash.splice(spliceStart,passwordLength).join('')
        
        setPass(PasswordOut)
    }

    function handleChangeLength(event) {
        setPassLength(event.target.value)
    }

    return (
        <main>
            <p className="top-text">
                <em>Strong and unique password generator for your online accounts</em>
            </p>
            <div>
                <div className='displayPassword'>
                    {pass ? pass : <p></p>}
                </div>
                <div className='userInput'>
                    <div className="custom-select">
                        <label htmlFor="">Password Length: </label>
                        <select onChange={handleChangeLength} >
                            {options.map((option, index) => {
                                return(
                                    <option key={index}>
                                        {option}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <button 
                        className='userSubmit'
                        onClick={generatePass}
                        >Generate    
                    </button>
                </div>
            </div>
            <div className="bottom-text">
                <p>Benifits of using a password generator: </p>
                <br />
                <p><strong> Enhanced Security:</strong> Password generators create strong and complex passwords that are difficult for hackers to guess or crack. These passwords typically include a combination of uppercase and lowercase letters, numbers, and special characters, making them more secure than easily guessable passwords.</p>
                <br />
                <p><strong> Unique Passwords for Each Account:</strong> A password generator can create unique passwords for each of your onulne accounts. This prevents the risk of a security breach on one platform compromising your other accounts, as each password is different.</p>
                <br />
                <p><strong> Time Savings:</strong> Manually coming up with strong passwords for each of your accounts can be time-consuming. Password generators provide an efficient solution, instantly generating secure passwords in a matter of seconds.</p>
                <br />
                <p><em>In summary, using a password generator can significantly improve your online security by providing strong, unique, and convenient passwords, ultimately helping to protect your personal information and data from unauthorized access.</em></p>
                <br />
            </div>
            
        </main>
    )
}

export default Main