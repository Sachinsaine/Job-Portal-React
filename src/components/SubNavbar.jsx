export const SubNavbar = () => {
  return (
    <div>
      <div>
        <label htmlFor="Keyword">Keyword</label>
        <input type="text" placeholder="Title" />

        <label htmlFor="Loaction">Loaction</label>
        <section>
          <option value="Anywhere">Anywhere</option>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
        </section>

        <label htmlFor="Category">Category</label>
        <section>
          <option value="All category">All category</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Mobile Developer">Mobile Developer</option>
        </section>
      </div>
    </div>
  );
};
