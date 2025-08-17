import "./_style.css";

const SwipeSwitch = ({ text, icon }: { text: string, icon?: string }) => {
  return (
    <div class="swipe-switch">
      {text}
      {icon && <img src={icon} alt="Swipe Icon" />}
    </div>
  );
};

export default SwipeSwitch;
