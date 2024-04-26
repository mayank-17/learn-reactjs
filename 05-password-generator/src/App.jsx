import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [passwordLength, setPasswordLength] = useState(10);

  const [numbersAllowed, setNumbersAllowed] = useState(false);

  const [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const [copyBtnColor, setCopyBtnColor] = useState("bg-blue-700")

  // useRef Hook
  const passwordRef = useRef(null);

  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const copyPasswordToClipboard = useCallback(() => {
    setCopyBtnColor("bg-green-700");
    setCopyBtnText("Copied");
    // passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "0123456789";
    if (specialCharsAllowed) str += "!@#$%^&*()_+-={}[]~`";

    for(let i = 0; i < passwordLength; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);

    setCopyBtnColor("bg-blue-700");

    setCopyBtnText("Copy");

  }, [passwordLength, numbersAllowed, specialCharsAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [passwordLength, numbersAllowed, specialCharsAllowed, passwordGenerator]);

  return (
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mt-4 mb-4'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
        <button className={`outline-none ${copyBtnColor} text-white px-3 py-1 shinrk-0`} onClick={copyPasswordToClipboard}>
          {copyBtnText}
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={50} value={passwordLength} className='cursor-pointer' onChange={(event) => {setPasswordLength(event.target.value)}}/>
          <label>Length: {passwordLength}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numbersAllowed} id="numbersInput" onChange={() => {setNumbersAllowed((prev) => !prev)}}/>
          <label htmlFor='numbersInput'>Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={specialCharsAllowed} id="specialCharsInput" onChange={() => {setSpecialCharsAllowed((prev) => !prev)}}/>
          <label htmlFor='specialCharsInput'>Include Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
