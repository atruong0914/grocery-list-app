function Welcome({onContinue}) {
    return (
        <main className="welcome-page">
            <section className="welcome-card">
                <h1>Welcome!</h1>
                <p>Let's build your grocery list.</p>

                {/*runs the function from App.jsx, go to theme page  */}
                <button type="button" onClick={onContinue}> 
                    Continue
                </button>
            </section>
        </main>
    );
}

export default Welcome;