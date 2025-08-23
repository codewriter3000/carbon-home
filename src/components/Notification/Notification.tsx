import "./_style.css";

const Notification = ({
  timestamp,
  app,
  message,
  type,
}: {
  timestamp: string;
  app: string;
  message: string;
  type: "info" | "success" | "error";
}) => {
  return (
    <div class={`notification-${type}`}>
        <h3 class="app">{app}</h3>
				<div class="timestamp">{timestamp}</div>
        <div class="message">{message}</div>
    </div>
  );
};

export default Notification;
