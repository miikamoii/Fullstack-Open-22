const Notification = ({ message, isError }) => {
    if (message === null) {
      return null
    }
    
    return (
      <div className={isError ? 'notificationerror' : 'notification'}>
        {message}
      </div>
    )
  }

  export default Notification;