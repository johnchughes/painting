import usePageData from "../Hooks/usePageData";

const Header = () => {

    const data = usePageData('/data/home.json');

    if(data == null)
    {
        return <header>...</header>
    }

    return (
        <header>
            <h1>{data.title}</h1>
            <p>{data.blurb}</p>
      </header>
    );
}

export default Header;