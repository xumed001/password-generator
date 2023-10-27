//
//
import { sha256 } from 'js-sha256'

function Main() {
    const array = new Uint32Array(1)
    const seed = self.crypto.getRandomValues(array)
    const seedIni = seed[0].toString()
    const hashCode = sha256(seedIni)
    const hashArr = [...hashCode]
    const shuffledHash  = fyShuffle(hashArr)

    const passwordLength = 24
    const spliceStart = roll(0, 64 - passwordLength)
    const PasswordOut = shuffledHash.splice(spliceStart,passwordLength).join('')
    
    function fyShuffle (toShuffle = []) {
        for (let i = (toShuffle.length - 1); i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [toShuffle[i], toShuffle[randomIndex]] = [toShuffle[randomIndex], toShuffle[i]];
        }
        return toShuffle;
    }

    function roll(min, max) {
        let result = Math.floor(Math.random() * (max - min) + min)
        return result
    }


    return (
        <main>
            <div className="top-text">
                Strong and unique password generator for your online accounts
            </div>
            <div>
                <div className='displayPassword'>
                    {PasswordOut}
                </div>
                <div className='userInput'>
                    <div className="custom-select">
                        <label htmlFor="">Password Length: </label>
                        <select name="pwLength" id="pwLength">
                                <option value="16">16</option>
                                <option value="20">20</option>
                                <option value="24">24</option>
                        </select>
                    </div>
                    <button className='userSubmit'>Generate</button>
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
                {/* <p>In summary, using a password generator can significantly improve your online security by providing strong, unique, and convenient passwords, ultimately helping to protect your personal information and data from unauthorized access.</p>
                <br /> */}
            </div>
            
        </main>
    )
}

export default Main