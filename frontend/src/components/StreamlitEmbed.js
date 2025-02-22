import React from 'react';

const StreamlitEmbed = () => {
    return (
        <div>
            <h2>Streamlit App Embed</h2>
            <iframe
                title="Streamlit App"
                src="http://localhost:8501" // Change this to your Streamlit app URL
                width="100%"
                height="600px"
            />
        </div>
    );
};

export default StreamlitEmbed;