function unavailable() {
  throw new Error('Smart Plugins integration is unavailable in this build (smart-plugins-obsidian source not available).');
}

export function get_smart_server_url() { unavailable(); }
export function fetch_plugin_zip() { unavailable(); }
export function parse_zip_into_files() { unavailable(); }
export function write_files_with_adapter() { unavailable(); }
export function enable_plugin() { unavailable(); }
