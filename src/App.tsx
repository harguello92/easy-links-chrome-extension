import useSearch from './hooks/useSearch';
import Searcher from './components/Searcher';
import Header from './components/Header';
import Card, { CardLink, CardLinks, CardTitle } from './components/Card';
import StatusIndicator from './components/StatusIndicator';
import { useEffect, useState } from 'preact/hooks';
import { getConfig as getPersistedConfig } from './utils/localStorage';
import ConfigViewModel, { ConfigViewModelType } from './models/ConfigViewModel';
import { ConfigItemViewModelType } from './models/ConfigItemViewModel';
import { Config } from './types';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  const [config, setConfig] = useState<ConfigViewModelType>(ConfigViewModel({} as Config));
  const { data: filteredConfig, onSearch } = useSearch<ConfigItemViewModelType>(config.getItems(), ['name']);

  const persistedConfig = getPersistedConfig();

  useEffect(() => {
    setConfig(ConfigViewModel(persistedConfig));
  }, [persistedConfig]);

  return (
    <ToastProvider>
      <div className="w-[400px] bg-gray-50 relative">
        <div id="modal-root" />
        <Header logoUrl="" />
        <div className="p-4">
          <div className="mb-4">
            <Searcher onSearch={onSearch} />
          </div>
          <div className="space-y-3 h-[350px] overflow-y-auto">
            {filteredConfig.map((configItem) => (
              <Card>
                <CardTitle>
                  {configItem.getName()}
                  <StatusIndicator links={configItem.getCheckeableLinks()} />
                </CardTitle>
                <CardLinks>
                  {configItem.getLinks().map(({ name, url }) => {
                    return (
                      <CardLink href={url}>{name}</CardLink>
                    )
                  })}
                </CardLinks>
              </Card>
            ))}
            {filteredConfig.length === 0 &&
              <p className="text-center text-gray-500">No results found</p>
            }
          </div>
        </div>
      </div>
    </ToastProvider>
  );
}

export default App;
