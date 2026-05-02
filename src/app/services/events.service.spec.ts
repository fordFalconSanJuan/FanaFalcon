import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { EventsService, UpcomingEvent } from './events.service';

const MOCK_EVENTS: UpcomingEvent[] = [
  {
    id: 'test-event',
    title: 'Test Event',
    dateLabel: 'Sábado 1 de enero 2027',
    location: 'Test Location',
    summary: 'Test summary',
    imageUrl: 'assets/images/test.webp',
    status: 'Evento destacado',
  },
];

describe('EventsService', () => {
  let service: EventsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(EventsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getEvents() should GET assets/data/events.json', () => {
    service.getEvents().subscribe(events => {
      expect(events).toEqual(MOCK_EVENTS);
    });

    const req = httpMock.expectOne('assets/data/events.json');
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_EVENTS);
  });

  it('getEvents() should return an observable of UpcomingEvent[]', () => {
    let result: UpcomingEvent[] | undefined;

    service.getEvents().subscribe(events => {
      result = events;
    });

    httpMock.expectOne('assets/data/events.json').flush(MOCK_EVENTS);
    expect(result).toEqual(MOCK_EVENTS);
  });
});
