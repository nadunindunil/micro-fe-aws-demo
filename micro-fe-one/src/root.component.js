import "./root.component.css"

export default function Root(props) {
  return (
    <section className="containerA">
      {props.name} Micro FE one is mounted!
    </section>
  );
}
