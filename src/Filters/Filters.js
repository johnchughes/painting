import "./Filters.scss";

const Filters = () => {
    return (
        <div className="filters">
            <section>
                <label>Standard</label>
                <select>
                    <option>All</option>
                    <option>Battle Ready</option>
                    <option>Parade Ready</option>
                </select>
            </section>
            <section>
                <label>Game</label>
                <select>
                    <option>All</option>
                    <option>Warhammer 40k</option>
                    <option>Warhammer 40k: Kill Team</option>
                    <option>Bolt Action</option>
                </select>
            </section>
            <section>
                <label>Faction</label>
                <select>
                    <option>All</option>
                    <option>Tau Empire</option>
                    <option>Dark Angels</option>
                    <option>US Airbourne</option>
                </select>
            </section>
        </div>
    )
}

export default Filters;