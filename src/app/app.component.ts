import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'Forrest 01',
      url: 'https://media.istockphoto.com/photos/morning-fog-over-a-beautiful-lake-surrounded-by-pine-forest-stock-picture-id1302533034?k=20&m=1302533034&s=612x612&w=0&h=mqKdNs4tH9VSNTBXBOaGb7tUozy-HaDiGfVFnz2FNEo=',
    },
    {
      title: 'Forrest 02',
      url: 'https://media.istockphoto.com/photos/morning-fog-over-a-beautiful-pine-forest-picture-id1342209196?k=20&m=1342209196&s=612x612&w=0&h=Bs0aePAa1-i0NJL0GhYgLQ2mwrgSoW1GbA9KgXa5Y2A=',
    },
    {
      title: 'Forrest 03',
      url: 'https://media.istockphoto.com/photos/landscape-of-pine-tree-beside-the-lake-with-cloud-above-blue-sky-picture-id912993284?k=20&m=912993284&s=612x612&w=0&h=WxBS1JsEA13U8S4eZWYlGPx4NDRHXct24OOufoZaZHk=',
    },
    {
      title: 'Forrest 04',
      url: 'https://media.istockphoto.com/photos/hills-covered-with-forest-are-reflected-in-the-surface-of-the-lake-picture-id1326562659?k=20&m=1326562659&s=612x612&w=0&h=fJm3uE9znQcIqbbhHmWJbaW3FgEbIkd7RFDBIoKgxrk=',
    },
    {
      title: 'Forrest 05',
      url: 'https://media.istockphoto.com/photos/misty-pine-trees-forest-landscape-stock-photo-picture-id1301866616?k=20&m=1301866616&s=612x612&w=0&h=Pk60v7RVfoRv8mDzbiDtBIf9BQOUkznMHRMcgiW-UNE=',
    },
    {
      title: 'Forrest 01',
      url: 'https://media.istockphoto.com/photos/morning-fog-over-a-beautiful-lake-surrounded-by-pine-forest-stock-picture-id1302533034?k=20&m=1302533034&s=612x612&w=0&h=mqKdNs4tH9VSNTBXBOaGb7tUozy-HaDiGfVFnz2FNEo=',
    },
    {
      title: 'Forrest 02',
      url: 'https://media.istockphoto.com/photos/morning-fog-over-a-beautiful-pine-forest-picture-id1342209196?k=20&m=1342209196&s=612x612&w=0&h=Bs0aePAa1-i0NJL0GhYgLQ2mwrgSoW1GbA9KgXa5Y2A=',
    },
    {
      title: 'Forrest 03',
      url: 'https://media.istockphoto.com/photos/landscape-of-pine-tree-beside-the-lake-with-cloud-above-blue-sky-picture-id912993284?k=20&m=912993284&s=612x612&w=0&h=WxBS1JsEA13U8S4eZWYlGPx4NDRHXct24OOufoZaZHk=',
    },
    {
      title: 'Forrest 04',
      url: 'https://media.istockphoto.com/photos/hills-covered-with-forest-are-reflected-in-the-surface-of-the-lake-picture-id1326562659?k=20&m=1326562659&s=612x612&w=0&h=fJm3uE9znQcIqbbhHmWJbaW3FgEbIkd7RFDBIoKgxrk=',
    },
    {
      title: 'Forrest 05',
      url: 'https://media.istockphoto.com/photos/misty-pine-trees-forest-landscape-stock-photo-picture-id1301866616?k=20&m=1301866616&s=612x612&w=0&h=Pk60v7RVfoRv8mDzbiDtBIf9BQOUkznMHRMcgiW-UNE=',
    },
    {
      title: 'Forrest 01',
      url: 'https://media.istockphoto.com/photos/morning-fog-over-a-beautiful-lake-surrounded-by-pine-forest-stock-picture-id1302533034?k=20&m=1302533034&s=612x612&w=0&h=mqKdNs4tH9VSNTBXBOaGb7tUozy-HaDiGfVFnz2FNEo=',
    },
    {
      title: 'Forrest 02',
      url: 'https://media.istockphoto.com/photos/morning-fog-over-a-beautiful-pine-forest-picture-id1342209196?k=20&m=1342209196&s=612x612&w=0&h=Bs0aePAa1-i0NJL0GhYgLQ2mwrgSoW1GbA9KgXa5Y2A=',
    },
    {
      title: 'Forrest 03',
      url: 'https://media.istockphoto.com/photos/landscape-of-pine-tree-beside-the-lake-with-cloud-above-blue-sky-picture-id912993284?k=20&m=912993284&s=612x612&w=0&h=WxBS1JsEA13U8S4eZWYlGPx4NDRHXct24OOufoZaZHk=',
    },
    {
      title: 'Forrest 04',
      url: 'https://media.istockphoto.com/photos/hills-covered-with-forest-are-reflected-in-the-surface-of-the-lake-picture-id1326562659?k=20&m=1326562659&s=612x612&w=0&h=fJm3uE9znQcIqbbhHmWJbaW3FgEbIkd7RFDBIoKgxrk=',
    },
    {
      title: 'Forrest 05',
      url: 'https://media.istockphoto.com/photos/misty-pine-trees-forest-landscape-stock-photo-picture-id1301866616?k=20&m=1301866616&s=612x612&w=0&h=Pk60v7RVfoRv8mDzbiDtBIf9BQOUkznMHRMcgiW-UNE=',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
