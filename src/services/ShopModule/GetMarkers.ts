export function getMarkers(): any[] {
  const markers: any[] = [];

  const iconDict: { [id: string]: string } = {}

  iconDict["shopping"] = 'http://maps.google.com/mapfiles/ms/icons/shopping.png';
  iconDict["tree"] = 'http://maps.google.com/mapfiles/ms/icons/tree.png';

  for (let index = 0; index < 5; index++) {
    const type: string = Math.random() > 0.5 ? "Ferreteria" : "Aserradero";

    markers.push({
      id: index + 1,
      position: {
        lat: -33.3651438 - (((Math.random() * 2) - 1) / 75),
        lng: -70.7525297 - (((Math.random() * 2) - 1) / 75)
      },
      label: `${type} ejemplo ${index + 1}`,
      icon: type === "Ferreteria" ? iconDict["shopping"] : iconDict["tree"]
    })
  }

  return markers;
}