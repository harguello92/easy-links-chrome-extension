import servicesConfig from '../extension-config.json'
import useSearch from './hooks/useSearch';
import Searcher from './components/Searcher';
import Header from './components/Header';
import Card, { CardLink, CardLinks, CardTitle } from './components/Card';
import StatusIndicator from './components/StatusIndicator';


function App() {

  const { data: services, onSearch } = useSearch(servicesConfig, ['name']);


  return (
    <div className="w-[400px] bg-gray-50">
      <Header />
      <div className="p-4">
        <div className="mb-4">
          <Searcher onSearch={onSearch} />
        </div>
        <div className="space-y-3 h-[350px] overflow-y-auto">
          {services.map((service) => (
            <Card>
              <CardTitle>
                {service.name}
                <StatusIndicator urls={[service.links[0].url, service.links[1].url]} />
              </CardTitle>
              <CardLinks>
                {service.links.map(({ name, url, CSSClasses }) => {
                  return (
                    <CardLink href={url} CSSClasses={CSSClasses}>{name}</CardLink>
                  )
                })}
              </CardLinks>
            </Card>
          ))}
          {services.length === 0 &&
            <p className="text-center text-gray-500">No results found</p>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
