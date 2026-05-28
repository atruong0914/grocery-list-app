// make themes
const themes = [
    {
        id: "light",
        name: "Light",
        desc: "Clean and simple"
    },
    {
        id: "dark",
        name: "Dark",
        desc: "Easy on the eyes."
    },
    {
        id: "cute",
        name: "Cute",
        desc: "Cute, pretty, and pink."
    }
];

function ThemeSelect({ selectedTheme, onSelectTheme, onContinue }) {
    return (
        <main className="theme-page">
            <section className="theme-header">
                <h1>Choose your theme</h1>
                <p>Pick the best look for your grocery list</p>
            </section>

        {/*aria-label for screen readers */}
        <section className="theme-scroll" aria-label="Theme options">
            {/*go through each item (theme) in themes arr */}
            {themes.map((theme) => {
                // btn-class default
                let buttonClass = "theme-option"
                // if the theme selected = the theme id, then change btn class to it's selected
                if  ( selectedTheme === theme.id ) {
                    buttonClass = "theme-option selected"
                }
                
                    return (
                        <button
                            key={theme.id}
                            type="button"
                            className={buttonClass}
                            onClick={() => onSelectTheme(theme.id)}
                        >
                            <span className={`theme-preview theme-preview-${theme.id}`}></span>
                            <span>{theme.name}</span>
                            <small>{theme.desc}</small>
                        </button>
                    )
            })}
        </section>
        
        <button type="button" onClick={onContinue}>
            Continue
        </button>
        </main>
    );
}