import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpService } from './http.service';

let httpClient;
describe('Service: http', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HttpService],
            imports: [HttpClientModule]
        });
        httpClient = TestBed.get(HttpClient);
    });

    it ('should call get httpClient with baseUrl + given route', inject([HttpService], (service: HttpService) => {
        const value = of({});
        const route = 'route';
        const getSpy = spyOn(httpClient, 'get').and.returnValue(value);

        expect(service.get<any>(route)).toBe(value);
        expect(getSpy).toHaveBeenCalledWith(service.BASE_URL + route);
    }));

    it('should call httpClient post with baseUrl + route and specifies model', inject([HttpService], (service: HttpService) => {
        const value = of({});
        const route = 'route';
        const model = 'model';
        const postSpy = spyOn(httpClient, 'post').and.returnValue(value);
        expect(service.post<any, any>(model, route)).toBe(value);
        expect(postSpy).toHaveBeenCalledWith(service.BASE_URL + route, model);
    }));
});

