const PollDetails = ({ poll }) => {
  return (
    <div className="poll-details">
      <h4>{poll.title}</h4>
      {poll.options && poll.options.map((option) => (
        <p key={option._id}>
          <PollOption option={option}/>
        </p>
      ))}
    </div>
  )
}

const PollOption = ({ option }) => {
  return (
    <div className="poll-option">
      <p>{option.content}</p>
    </div>
  )
}

export default PollDetails