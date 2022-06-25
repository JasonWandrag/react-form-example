import "./Content.css";

const Content = ({ active }) => {
  const isActive = active ? "active" : "";
  return (
    <section className={"information " + isActive}>
      <h2>My world today</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ipsam at
        consequatur ipsa tempora nisi voluptatibus obcaecati! Doloremque earum
        dolores illo. <b>View all days</b> Itaque doloremque explicabo
        perspiciatis aliquid, nostrum ex commodi consequuntur quos aspernatur
        iste repellat voluptatibus assumenda accusamus beatae minus inventore
        cupiditate officiis quo nihil! Ex placeat dolorem aperiam quisquam
        necessitatibus quas adipisci iusto doloremque consequatur ad? Ducimus
        labore mollitia aspernatur cumque suscipit doloribus molestiae ipsum at
        repudiandae illo quos, unde architecto ea laborum eligendi, facilis
        numquam odit modi possimus fugiat necessitatibus non magnam dolorum.
        Enim quae, obcaecati similique perspiciatis dolor odit aut magni dicta,
        ex est optio tempora accusamus expedita.
      </p>
    </section>
  );
};

export default Content;
