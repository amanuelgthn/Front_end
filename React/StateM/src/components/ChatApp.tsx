import { useState } from "react"

type recipentT = string[]

const ChatApp: React.FC = () => {
    const [messageto, setMessageTo ] = useState<string>('Abel');
    const [message, setMessage] = useState<string>('Hello')

    // list of options for messaging
    const recipents: recipentT = ['Abel', 'Freedom', 'Adam', 'Eve', 'Sophia']
    const recipentto = recipents.map((recipent) => (
      <option key={recipent} value={recipent}>
        {recipent}
      </option>
    ))
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTimeout(() => {
          alert(`You said ${message} to ${messageto}`)
        }, 5000)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          To:{' '}
          <select
            value={messageto}
            onChange={e => setMessageTo(e.target.value)}>
              {recipentto}
            </select>
        </label>
        <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
      </form>
      <div>
        <h1>{message}:{messageto}</h1>
      </div>
    </>
  )
}

export default ChatApp
