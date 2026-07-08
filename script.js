* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #0b0b0b;
    font-family: Arial, Helvetica, sans-serif;
}

#viewer {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        radial-gradient(circle at center,
        rgba(255,255,255,.03),
        rgba(0,0,0,.95));
}

#preview {
    max-width: 100%;
    max-height: 100%;

    object-fit: contain;

    opacity: 0;
    transition: opacity .35s ease;
    user-select: none;
    pointer-events: none;
}

#preview.show {
    opacity: 1;
}
