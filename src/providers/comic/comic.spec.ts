import { MarvelAPI, MarvelAPIConfig } from './comic.ts'

describe('MarvelAPI', () => {
  let marvelAPI: MarvelAPI;
  const marvelAPIConfig  = {
    apiKey: 'lalala', baseUrl: 'http://mockurl.io', limit: 15
  }

  beforeEach(() => {
    marvelAPI = new MarvelAPI(null, marvelAPIConfig);
  });

  it('should get comicListUrl', () => {
    expect(marvelAPI.comicListUrl).toBe(
      'http://mockurl.io/v1/public/comics'
     )
  });

  it('should getDateRangePerYear', () => {
    expect(marvelAPI.getDateRangePerYear(2015)).toBe(
      '2015-01-01,2015-12-31'
     )
  });

  describe('getComicSearchParams', () => {
    it('should handle no arg', () => {
      const searchParams = marvelAPI.getComicsSearchParams();
      const paramsMap = searchParams.paramsMap;
      expect(paramsMap.size).toBe(2);
      expect(paramsMap.get('apiKey')).toEqual(['lalala']);
      expect(paramsMap.get('limit')).toEqual(['15']);
    });

    it('should handle arg', () => {
      const searchParams = marvelAPI.getComicsSearchParams({
        year: 2008,
        title: 'deadpool',
      });
      const paramsMap = searchParams.paramsMap;
      expect(paramsMap.size).toBe(4);
      expect(paramsMap.get('apiKey')).toEqual(['lalala']);
      expect(paramsMap.get('limit')).toEqual(['15']);
      expect(paramsMap.get('dateRange')).toEqual(['2008-01-01,2008-12-31']);
      expect(paramsMap.get('title')).toEqual(['deadpool']);
    });
  });
});
