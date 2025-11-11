import PropTypes from "prop-types";


export default function SplashLoader({
  visible = false,
  title = "Loading...",

}) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-background z-50 transition-opacity duration-700 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-hidden={!visible}
    >
      <h1 className="text-2xl font-semibold text-primary tracking-wide">
        WELCOME
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">{title}</p>
    </div>
  );
}

// ✅ Add this section to remove 'missing in props validation' warning
SplashLoader.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  logo: PropTypes.string,
};
