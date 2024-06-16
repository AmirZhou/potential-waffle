import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;
  // private marker: google.maps.marker.AdvancedMarkerElement;

  public async addUserMarker(user: User): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;
    console.log(user);
    console.log(this.googleMap);
    new AdvancedMarkerElement({
      position: user.location,
      map: this.googleMap,
    });
  }
  // public addCompanyMarker (company : Company):void {

  // }
  constructor(id: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(id) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 51.0447,
          lng: -114.066666,
        },
      }
    );
  }
}
