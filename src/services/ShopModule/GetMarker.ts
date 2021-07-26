export function getMarker(id: number): any {
  const iconDict: { [id: string]: string } = {}

  iconDict["shopping"] = 'http://maps.google.com/mapfiles/ms/icons/shopping.png';
  iconDict["tree"] = 'http://maps.google.com/mapfiles/ms/icons/tree.png';

  const imageDict: { [id: string]: string } = {}

  imageDict["shopping"] = 'https://graficasjr.com/wp-content/uploads/2021/03/Ferreteri%CC%81a-1400x788.png';
  imageDict["tree"] = 'https://previews.123rf.com/images/nuvolarossa/nuvolarossa1707/nuvolarossa170700014/82819498-pilas-de-madera-de-pino-y-abeto-en-un-aserradero-en-las-monta%C3%B1as-italianas.jpg';

  const type: string = Math.random() > 0.5 ? "Ferreteria" : "Aserradero";

  const marker: any = {
    id: id,
    position: {
      lat: -33.3651438 - (((Math.random() * 2) - 1) / 75),
      lng: -70.7525297 - (((Math.random() * 2) - 1) / 75)
    },
    label: `${type} ejemplo ${id}`,
    icon: type === "Ferreteria" ? iconDict["shopping"] : iconDict["tree"],
    image: type === "Ferreteria" ? imageDict["shopping"] : imageDict["tree"],
    ubication: "Calle falsa 123",
    buys: [{
      name: "Lorem ipsum dolor sit amet",
      ammount: Math.ceil(Math.random() * 10)
    }, {
      name: "consectetur adipiscing elit",
      ammount: Math.ceil(Math.random() * 10)
    }, {
      name: "incididunt ut labore et dolore",
      ammount: Math.ceil(Math.random() * 10)
    }, {
      name: "Ut enim ad minim veniam",
      ammount: Math.ceil(Math.random() * 10)
    }]
  }

  return marker;
}